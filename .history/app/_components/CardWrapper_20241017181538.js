import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import AuthHeader from "./AuthHeader";

function CardWrapper({ label, title, backBtnHref, backBtnTitle, children }) {
  return (
    <div>
      <Card>
        <CardHeader>
          <AuthHeader label={label} title={title} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default CardWrapper;
