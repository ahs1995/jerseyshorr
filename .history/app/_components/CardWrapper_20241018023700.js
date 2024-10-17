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
    <Card className="max-w-[10px] shadow-md">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default CardWrapper;
