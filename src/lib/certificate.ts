export const CERT_BASE_PATH = "/certs";

export function getCertSalt(): string {
  const salt = import.meta.env.PUBLIC_CERT_SALT;

  if (!salt) {
    throw new Error("Missing PUBLIC_CERT_SALT environment variable");
  }

  return salt;
}

export function normalizeCertificateEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function hashCertificateEmail(email: string): Promise<string> {
  const normalized = normalizeCertificateEmail(email);
  const data = new TextEncoder().encode(normalized + getCertSalt());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function getCertificateUrl(hash: string): string {
  return `${CERT_BASE_PATH}/${hash}.pdf`;
}
