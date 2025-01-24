"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LuShare2 } from "react-icons/lu";

import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

function ShareButton({ productId, name }: { productId: string; name: string }) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/products/${productId}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <WhatsappShareButton url={shareLink} title={name}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <FacebookShareButton url={shareLink} title={name}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} title={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
