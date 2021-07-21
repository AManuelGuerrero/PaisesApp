export interface Country {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         Region;
    subregion:      string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number | null;
    gini:           number | null;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           string;
}

export interface Currency {
    code:   null | string;
    name:   null | string;
    symbol: null | string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export interface RegionalBloc {
    acronym:       string;
    name:          string;
    otherAcronyms: string[];
    otherNames:    string[];
}

export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: null | string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}
