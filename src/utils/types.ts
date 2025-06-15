// 인포 - info
export type MainInfo = {
  groom: {
    nameKo: string;
    nameEn: string;
    groomFather: string;
    groomMother: string;
  };
  bride: {
    nameKo: string;
    nameEn: string;
    brideFather: string;
    brideMother: string;
  };
  images: {
    main: string;
    sub1: string;
    sub2: string;
  };
  wedding: {
    date: string;
    day: string;
    time: string;
    txt: string;
    location: string;
    address: string;
    numOfBlank: string;
  };
  message: {
    footer: string;
    quote: string;
  };
};

export interface IMainInfo {
  info: MainInfo;
}

// 연락처 - contacts
export type Contact = {
  role: string;
  name: string;
  phone: string;
};

export interface IContact {
  contact: Contact[];
}

// 갤러리 - gallery
export type Gallery = string[];

// 계좌번호 - accounts
export type Account = {
  type: string;
  label: string;
  name: string;
  account: string;
};

export interface IAccount {
  acc: Account[];
}
