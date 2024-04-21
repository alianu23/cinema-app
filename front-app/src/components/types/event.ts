export interface IEvent {
  name: string;
  image: string;
  date: string;
  link: string;
  about: string;
  location: string;
  addition: string;
}
export type TEventContext = {
  events: IEvent[];
};
