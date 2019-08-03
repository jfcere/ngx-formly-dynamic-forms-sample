export class Example {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  favoriteColor: string;
  favoriteFruits: string[];
  comment: string;
  terms: boolean;
  newsletter: boolean;
  newsletterEmail: string;

  static get empty(): Example {
    return {
      firstName: '',
      lastName: '',
      birthDate: '',
      gender: '',
      favoriteColor: '',
      favoriteFruits: [],
      comment: '',
      terms: false,
      newsletter: false,
      newsletterEmail: '',
    };
  }
}
