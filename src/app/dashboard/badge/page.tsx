import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge capitalize>default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="info" capitalize>
        info
      </Badge>
      <Badge variant="success" capitalize>
        success
      </Badge>
    </div>
  );
}

export default Page;
