"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function FeedCard({
  date,
  title,
  content,
  name,
}: {
  date: Date;
  title: string;
  content: string;
  name: string;
}) {
  const { toast } = useToast();

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Prompt copied 🔥✨",
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Card className="relative">
      <div className="absolute right-0 top-0 p-3">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary group"
          onClick={handleCopy}
        >
            {copied ? <CheckIcon className="w-4 h-4 group-hover:scale-110" />: <ClipboardIcon className="w-4 h-4 group-hover:scale-110" />}
        </Button>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>by {name} on {date.toDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4>{content}</h4>
      </CardContent>
    </Card>
  );
}
