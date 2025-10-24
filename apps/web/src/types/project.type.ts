export type Category = "Website" | "Roblox" | "Minecraft" | "Discord Bot" | "Program"

export type Projects = {
  title: string;
  description: string;
  image: string;
  linkGithub: string | undefined;
  linkWebsite: string | undefined;
  stacks: string[];
  category: string;
  year?: number;
  type: "Private" | "Public" | "Customer Work";
};