import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@metallicjs/ui/components/dialog";

import CloseIcon from "@/public/assets/website/close-icon.svg";
import CopyIcon from "@/public/assets/website/copy-icon.svg";
import FacebookLogo from "@/public/assets/website/facebook-logo.svg";
import InstagramLogo from "@/public/assets/website/instagram-logo.svg";
import TwitterLogo from "@/public/assets/website/twitter-logo.svg";

const ShareModal = ({
  open,
  setOpen,
  link,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  link: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md p-0 [&>button]:hidden outline-none">
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center gap-2 justify-between">
            <DialogTitle className="font-medium">Share Post</DialogTitle>
            <CloseIcon
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          </div>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 p-4">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <FacebookLogo />
            <p className="text-muted-foreground">Facebook</p>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <TwitterLogo />
            <p className="text-muted-foreground">X</p>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <InstagramLogo />
            <p className="text-muted-foreground">Instagram</p>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <CopyIcon />
            <p className="text-muted-foreground">Link</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
