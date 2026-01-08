export type Category = "Website" | "Roblox" | "Minecraft" | "Discord Bot" | "Program"

export type Projects = {
  title: string;
  description: string;
  image: string;
  linkGithub?: string;
  linkWebsite?: string;
  linkRoblox?: string
  stacks: string[];
  category: string;
  year?: number;
  type: string;
};
