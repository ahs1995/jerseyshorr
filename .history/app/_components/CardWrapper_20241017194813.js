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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{label}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default CardWrapper;
