import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardWrapper({ label, title, children }) {
  return (
    <div>
      <Card className="shadow-md lg:w-[80%]">
        <CardHeader className="text-center">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{label}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

export default CardWrapper;
