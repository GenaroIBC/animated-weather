export type TemperatureUnit = 'degrees' | 'farenheit';

export type Coordinates = { latitude: number; longitude: number };

export interface KnownError {
	ok: false;
	message: string;
}

export interface KnownResponse<T> {
	ok: true;
	data: T;
}

export type Direction = 'left' | 'right' | 'top' | 'bottom';
