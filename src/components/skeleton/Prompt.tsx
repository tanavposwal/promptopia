import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Prompt() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="animate-pulse">
        <CardHeader>
          <CardTitle><div className="w-full h-4 bg-secondary" /></CardTitle>
          <CardDescription><div className="w-full h-4 bg-secondary" /></CardDescription>
        </CardHeader>
        <CardContent>
        <div className="w-full h-16 bg-secondary" />
        </CardContent>
      </Card>
      <Card className="animate-pulse">
        <CardHeader>
          <CardTitle><div className="w-full h-4 bg-secondary" /></CardTitle>
          <CardDescription><div className="w-full h-4 bg-secondary" /></CardDescription>
        </CardHeader>
        <CardContent>
        <div className="w-full h-16 bg-secondary" />
        </CardContent>
      </Card>
      <Card className="animate-pulse">
        <CardHeader>
          <CardTitle><div className="w-full h-4 bg-secondary" /></CardTitle>
          <CardDescription><div className="w-full h-4 bg-secondary" /></CardDescription>
        </CardHeader>
        <CardContent>
        <div className="w-full h-16 bg-secondary" />
        </CardContent>
      </Card>
    </div>
  );
}
