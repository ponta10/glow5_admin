const userAgent = navigator.userAgent.toLowerCase();
let isSafari = false;
if (userAgent.indexOf('safari') !== -1) {
  if (userAgent.indexOf('chrome') > -1) {
    isSafari = false; // Chrome
  } else {
    isSafari = true; // Safari
  }
}

/* eslint-disable no-useless-escape */
export const EMAIL_PATTERN = {
  regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: '正しいメールアドレスを入力してください。',
};

export const NUMBER_TEXT_PATTERN = {
  regex: '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$',
  message: '数値のみ入力できます。',
};

export const TEXT_PATTERN = {
  regex: '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$',
  message: '無効な文字列が含まれています。',
};

export const ONLY_TEXT_PATTERN = {
  regex: '^[A-Za-z _]*[A-Za-z][A-Za-z _]*$',
  message: '数値以外の文字列のみ入力できます。',
};

export const NUMBER_RANGE_ONE_HUNDRED_PATTERN = {
  regex: '^[1-9][0-9]?$|^100$',
  message: '100以下の数値で入力してください。',
};

export const NO_SPECIAL_CHAR_PATTERN = {
  regex: '^[a-zA-Z0-9_]*$',
  message: '無効な文字列が含まれています。',
};

export const ONLY_NINE_CHAR_PATTERN = {
  regex: '^[0-9]{0,9}$',
  message: '数値以外が含まれています。',
};

export const USERID_LENGTH_PATTERN = {
  regex: '^.{6,32}$',
  message: 'ユーザーIDの長さが無効です。',
};

export const MAX_50_LENGTH_PATTERN = {
  regex: '^.{0,50}$',
  message: '50文字以上入力できません。',
};
export const MAX_10_LENGTH_PATTERN = {
  regex: '^.{0,10}$',
  message: '10文字以上入力できません。',
};
export const MAX_30_LENGTH_PATTERN = {
  regex: '^.{0,30}$',
  message: '30文字以上入力できません。',
};
export const PIN_CODE_PATTERN = {
  regex: /^\d{3}\-{0,1}\d{4}$/,
  message: 'app.validation.pincode',
};

export const PHONE_PATTERN = {
  regex: '/^(\d{2}-{0,1}\d{3,4}-{0,1}\d{4})$/',
  message: '電話番号が無効です。',
};

export const PHONE_DIGITS_PATTERN = {
  regex: '^[0-9]{10,11}$',
  message: '10~11桁の半角数字で入力してください。',
};

export const POSTALCODE_PATTERN = {
  regex: '^[0-9]{7}$',
  message: '7桁の半角数字で入力してください。',
};

export const USERID_HALFWIDTH_PATTERN = {
  regex: '^[a-zA-Z0-9\\-\\.\\_]*$',
  message: '半角で入力してください。',
};

export const POSITIVE_NUMBER_PATTERN = {
  regex: '^[1-9][0-9]*$',
  message: '0以上の正しい数値を入力してください。',
};

export const NUMBER_PATTERN = {
  regex: '^[0-9]*$',
  message: '正しい数値を入力してください。',
};

export const POSITIVE_NUMBER_CHECK = {
  regex: '[^0]+',
  message: '0以上の数値を入力してください。',
};
export const CHECK_BLANK = {
  regex: '[^\\sS]+',
  message: '空白が含まれています。',
};

export const CHECK_VALID_STRINGS = isSafari ? {
  regex: '[^\\sS]+',
  message: '無効な文字列が含まれています。',
} : {
  regex: '^(?! )[一-龠 ]+|[ぁ-ゔ ]+|[ァ-ヴー ]+|[A-Za-z0-9 ]+|[々〆〤 ]*(?<! )$',
  message: '無効な文字列が含まれています。',
};

export const PASSWORD_LENGTH_PATTERN = {
  regex: '^.{8,}$',
  message: 'パスワードの長さが無効です。',
};
export const OTP_LENGTH_PATTERN = {
  regex: '^[0-9]{6}$',
  message: '文字列の長さが無効です。',
};
export const NO_SPECIAL_CHAR = {
  regex: '\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s',
  message: '無効な文字列が含まれています。',
};

export const NO_SPECIAL_CHAT_PATTERN = {
  // regex: /^[^*|\":<>[\]{}`\\()';@&$]+$/,
  regex: '^[a-zA-Z0-9_\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf- ]*$',
  message: '無効な文字列が含まれています。',
};

/**
   * The ranges are (https://stackoverflow.com/questions/15033196/using-javascript-to-check-whether-a-string-contains-japanese-characters-includi/15034560):
      3000 - 303f: Japanese-style punctuation
      3040 - 309f: Hiragana
      30a0 - 30ff: Katakana
      ff00 - ff9f: Full-width Roman characters and half-width Katakana
      4e00 - 9faf: CJK unified ideographs - Common and uncommon Kanji
      3400 - 4dbf: CJK unified ideographs Extension A - Rare Kanji
*/
export const ONLY_JP_PATTERN = {
  regex: '^[a-zA-Z \u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]*$',
  message: '無効な文字列が含まれています。',
};

export const MAX_100_LENGTH_PATTERN = {
  regex: '^.{0,100}$',
  message: '100文字以上入力できません。',
};

export const MAX_20_LENGTH_PATTERN = {
  regex: '^.{0,20}$',
  message: '20文字以上入力できません。',
};

export const CARD_NUMBER_PATTERN = {
  regex: '^[0-9 -]+$',
  message: '無効なカード番号です。',
};

export const SIGNUP_CODE_LENGTH_PATTERN = {
  regex: '^.{5,}$',
  message: '無効なコードです。',
};

export const EMPTY_FIELD = "This Field can't be empty";
