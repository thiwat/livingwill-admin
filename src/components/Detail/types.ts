import { Entity } from "@/enums/entity";
import { Section } from "@/types/detail";

export type DetailProps = {
  sections: Section[]
  title: string
  entity: Entity
  keyData: string
}