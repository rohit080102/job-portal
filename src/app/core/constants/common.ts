class CommonConstant{
  appStorage: any;
  constructor() {}
  public TOKEN: string = 'sessionToken';
  public PERMISSION_SETS: string = 'permissionSets';
  public USER_DATA: string = 'userData';
  public SESID: string = 'sessionId';
  public MOBILE_FOR_VERIFICATION: string = 'mobileVerification';
}

export let common = new CommonConstant();
