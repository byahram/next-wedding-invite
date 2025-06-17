// 인포 - info
export type WeddingInfo = {
  groom: {
    nameKo: string;
    nameEn: string;
    father: string;
    mother: string;
  };
  bride: {
    nameKo: string;
    nameEn: string;
    father: string;
    mother: string;
  };
  images: {
    main: string;
    sub1: string;
    sub2: string;
  };
  wedding: {
    dateAndTime: string;
    day: string;
    txt: string;
    location: string;
    address: string;
    call: string;
    lat: number;
    lng: number;
    numOfBlank: string;
  };
  message: {
    footer: string;
    quote: string;
    closing: string;
  };
};

export interface IWeddingInfo {
  info: WeddingInfo;
}

// transportation
export type Transportation = {
  title: string;
  details: string[];
};

// 양가 가족 - participants
export type Participants = {
  type: string;
  role: string;
  name: string;
  phone: string;
  account: string;
  label: string;
};

export interface IParticipants {
  parts: Participants[];
}

// 갤러리 - gallery
export type Gallery = string[];
