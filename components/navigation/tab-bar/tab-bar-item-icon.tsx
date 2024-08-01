import { Calendar, Home } from "~/components/data-display/icons";

type Props = {
  name: string;
};
export default function TabBarItemIcon({ name }: Props) {
  switch (name) {
    case "calendar":
      return <Calendar className="h-4 w-4 text-royal-violet" />;
    case "index":
      return <Home className="h-4 w-4 text-royal-violet" />;
    default:
      return null;
  }
}
