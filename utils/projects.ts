import { MotionValue } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  src: string;
  tags: Tag[];
  i?: number;
  progress?: MotionValue<number>;
  range?: number[];
  targetScale?: number;
}

export type Tag = { label: string; content: string };

export const projects: Project[] = [
  {
    id: 1,
    title: "projectname 001",
    src: "/project-01.jpg",
    tags: [
      {
        label: "client",
        content: "experimental client",
      },
      {
        label: "year",
        content: "2021",
      },
      {
        label: "role",
        content: "frontend developer",
      },
      {
        label: "challenge",
        content: "experimental challenge",
      },
      {
        label: "process",
        content: "experimental process",
      },
      {
        label: "outcome",
        content: "experimental outcome. you can place links here.",
      },
    ],
  },
  {
    id: 2,
    title: "projectname 002",
    src: "/project-02.png",
    tags: [
      {
        label: "client",
        content: "experimental client",
      },
      {
        label: "year",
        content: "2021",
      },
      {
        label: "role",
        content: "frontend developer",
      },
      {
        label: "challenge",
        content: "experimental challenge",
      },
      {
        label: "process",
        content: "experimental process",
      },
      {
        label: "outcome",
        content: "experimental outcome. you can place links here.",
      },
    ],
  },
  {
    id: 3,
    title: "projectname 003",
    src: "/project-03.jpg",
    tags: [
      {
        label: "client",
        content: "experimental client",
      },
      {
        label: "year",
        content: "2021",
      },
      {
        label: "role",
        content: "frontend developer",
      },
      {
        label: "challenge",
        content: "experimental challenge",
      },
      {
        label: "process",
        content: "experimental process",
      },
      {
        label: "outcome",
        content: "experimental outcome. you can place links here.",
      },
    ],
  },
  {
    id: 4,
    title: "projectname 004",
    src: "/project-04.jpg",
    tags: [
      {
        label: "client",
        content: "experimental client",
      },
      {
        label: "year",
        content: "2021",
      },
      {
        label: "role",
        content: "frontend developer",
      },
      {
        label: "challenge",
        content: "experimental challenge",
      },
      {
        label: "process",
        content: "experimental process",
      },
      {
        label: "outcome",
        content: "experimental outcome. you can place links here.",
      },
    ],
  },
  {
    id: 5,
    title: "projectname 005",
    src: "/project-05.jpg",
    tags: [
      {
        label: "client",
        content: "experimental client",
      },
      {
        label: "year",
        content: "2021",
      },
      {
        label: "role",
        content: "frontend developer",
      },
      {
        label: "challenge",
        content: "experimental challenge",
      },
      {
        label: "process",
        content: "experimental process",
      },
      {
        label: "outcome",
        content: "experimental outcome. you can place links here.",
      },
    ],
  },
  {
    id: 6,
    title: "projectname 006",
    src: "/project-06.jpg",
    tags: [
      {
        label: "client",
        content: "experimental client",
      },
      {
        label: "year",
        content: "2021",
      },
      {
        label: "role",
        content: "frontend developer",
      },
      {
        label: "challenge",
        content: "experimental challenge",
      },
      {
        label: "process",
        content: "experimental process",
      },
      {
        label: "outcome",
        content: "experimental outcome. you can place links here.",
      },
    ],
  },
  {
    id: 7,
    title: "projectname 007",
    src: "/project-01.jpg",
    tags: [
      {
        label: "client",
        content: "experimental client",
      },
      {
        label: "year",
        content: "2021",
      },
      {
        label: "role",
        content: "frontend developer",
      },
      {
        label: "challenge",
        content: "experimental challenge",
      },
      {
        label: "process",
        content: "experimental process",
      },
      {
        label: "outcome",
        content: "experimental outcome. you can place links here.",
      },
    ],
  },
  {
    id: 8,
    title: "projectname 008",
    src: "/project-08.jpg",
    tags: [
      {
        label: "client",
        content: "experimental client",
      },
      {
        label: "year",
        content: "2021",
      },
      {
        label: "role",
        content: "frontend developer",
      },
      {
        label: "challenge",
        content: "experimental challenge",
      },
      {
        label: "process",
        content: "experimental process",
      },
      {
        label: "outcome",
        content: "experimental outcome. you can place links here.",
      },
    ],
  },
];
