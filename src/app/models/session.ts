import { Song } from './song'

export interface Session {
    code: string;
    playlist: [Song];
    members: [string];
    hostUID: string;
}
