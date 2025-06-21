export default interface MealItemI {
  id?: string | FormDataEntryValue | null;
  title: string | FormDataEntryValue | null;
  slug?: string | FormDataEntryValue | null;
  image: string | FormDataEntryValue | null;
  summary: string | FormDataEntryValue | null;

  creator: string | FormDataEntryValue | null;

  creator_email: string | FormDataEntryValue | null;

  instructions: string | FormDataEntryValue | null;
}
