export interface Activity {
  time: string;
  title: string;
  type: 'talk' | 'workshop' | 'event' | 'break' | 'installfest';
}

export interface Room {
  id: string;
  name: string;
  capacity: string;
  icon: string;
  activities: Activity[];
} 