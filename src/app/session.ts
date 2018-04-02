export class Session {
  id: number;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: [
    {
      id: string;
      name: string;
    }
  ];
  roomId: number;
  room: string;
}
