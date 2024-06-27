import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";


export default function Loading() {
  const data = "123456789".split("");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Skeleton className="rounded-full mr-2 w-10 h-10" />

            <div className="flex-col flex-grow">
              <Skeleton className="w-1/2 h-4 mb-2" />
              <Skeleton className="w-full h-3 mb-2" />
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Skeleton className="w-20 h-8" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
