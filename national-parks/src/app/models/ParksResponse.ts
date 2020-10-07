import { Park } from './Park';

export interface ParksResponse {
    total: string;
    data: Park[];
    limit: string;
    start: string;
}