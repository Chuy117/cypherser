export interface AnalyseInterface {
    data: Data;
}

export interface Data {
    id:         string;
    type:       string;
    links:      Links;
    attributes: Attributes;
}

export interface Attributes {
    title:                             string;
    last_http_response_code:           number;
    total_votes:                       TotalVotes;
    last_analysis_stats:               LastAnalysisStats;
    times_submitted:                   number;
    tags:                              string[];
    outgoing_links:                    string[];
    categories:                        Categories;
    tld:                               string;
    url:                               string;
    first_submission_date:             number;
    redirection_chain:                 string[];
    last_analysis_results:             { [key: string]: LastAnalysisResult };
    last_http_response_content_length: number;
    threat_names:                      any[];
    html_meta:                         { [key: string]: string[] };
    last_http_response_content_sha256: string;
    last_http_response_headers:        LastHTTPResponseHeaders;
    last_final_url:                    string;
    last_submission_date:              number;
    last_analysis_date:                number;
    last_modification_date:            number;
    trackers:                          Trackers;
    reputation:                        number;
}

export interface Categories {
    BitDefender:               string;
    "Xcitium Verdict Cloud":   string;
    Sophos:                    string;
    "Forcepoint ThreatSeeker": string;
}

export interface LastAnalysisResult {
    method:      Method;
    engine_name: string;
    category:    Category;
    result:      Result;
}

export enum Category {
    Harmless = "harmless",
    Undetected = "undetected",
}

export enum Method {
    Blacklist = "blacklist",
}

export enum Result {
    Clean = "clean",
    Unrated = "unrated",
}

export interface LastAnalysisStats {
    malicious:  number;
    suspicious: number;
    undetected: number;
    harmless:   number;
    timeout:    number;
}

export interface LastHTTPResponseHeaders {
    "x-trace-id":                    string;
    "content-length":                string;
    "content-type":                  string;
    date:                            string;
    "server-timing":                 string;
    "x-cache-status":                string;
    "access-control-expose-headers": string;
    "content-encoding":              string;
    "strict-transport-security":     string;
    vary:                            string;
    "x-linguee-cache-status":        string;
}

export interface TotalVotes {
    harmless:  number;
    malicious: number;
}

export interface Trackers {
    "Amazon Cloudfront":     AmazonAssociate[];
    Criteo:                  AmazonAssociate[];
    "Amazon Associates":     AmazonAssociate[];
    "Google Publisher Tags": AmazonAssociate[];
}

export interface AmazonAssociate {
    url:       string;
    id:        string;
    timestamp: number;
}

export interface Links {
    self: string;
}
