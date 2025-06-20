import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export default interface MealItemI {
  id?: string | FormDataEntryValue | null | string | ReactNode | StaticImport;
  title: string | FormDataEntryValue | null | string | ReactNode | StaticImport;
  slug?: string | FormDataEntryValue | null | string | ReactNode | StaticImport;
  image: string | FormDataEntryValue | null | string | ReactNode | StaticImport;
  summary:
    | string
    | FormDataEntryValue
    | null
    | string
    | ReactNode
    | StaticImport;
  creator:
    | string
    | FormDataEntryValue
    | null
    | string
    | ReactNode
    | StaticImport;
  creator_email:
    | string
    | FormDataEntryValue
    | null
    | string
    | ReactNode
    | StaticImport;
  instructions:
    | string
    | FormDataEntryValue
    | null
    | string
    | ReactNode
    | StaticImport;
}
