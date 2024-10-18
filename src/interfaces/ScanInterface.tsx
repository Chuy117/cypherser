export interface ScanInterface {
    data: Data;
}

export interface Data {
    type:  string;
    id:    string;
    links: Links;
}

export interface Links {
    self: string;
}
