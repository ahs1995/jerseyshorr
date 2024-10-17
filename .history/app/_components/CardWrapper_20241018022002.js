import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardWrapper({ label, title, backBtnHref, backBtnTitle, children }) {
  return (
    <Card className="shadow-md md:w-1/2">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default CardWrapper;
