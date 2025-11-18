import { LogIn, User, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="max-sm:hidden">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-background " align="end">
        <DropdownMenuLabel className="text-center">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-1">
          <DropdownMenuItem className="cursor-pointer flex items-center gap-2 px-2  rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
            <LogIn />
            Login
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-2 px-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
            <UserPlus /> Register
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
