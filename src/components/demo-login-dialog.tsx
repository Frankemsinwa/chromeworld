import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DemoLoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Demo Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Demo Access</DialogTitle>
          <DialogDescription>
            Enter your credentials to access the demo environment.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="demo_user" className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input id="password" type="password" value="demo_password" className="col-span-3" readOnly />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Sign In</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
