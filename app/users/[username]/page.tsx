import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  HoverCardTrigger,
  HoverCard,
  HoverCardContent,
} from "@/components/ui/hover-card";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Edit, Gift, TreePalm } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";

export default function SingleUserPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="w-full mt-4 flex flex-col xl:flex-row gap-6">
        <div className="xl:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={40}
                    className="rounded-full bg-blue-500/30 border border-blue-500/20 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h3 className="font-medium">Verified User</h3>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by an admin.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={40}
                    className="rounded-full bg-yellow-500/30 border border-yellow-500/20 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h3 className="font-medium">Trick or Treat!</h3>
                  <p className="text-sm text-muted-foreground">
                    This user has participated in the annual halloween event!
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Gift
                    size={40}
                    className="rounded-full bg-red-500/30 border border-red-500/20 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h3 className="font-medium">Present</h3>
                  <p className="text-sm text-muted-foreground">
                    This user has gifted a premium subscription to another user.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <TreePalm
                    size={40}
                    className="rounded-full bg-green-500/30 border border-green-500/20 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h3 className="font-medium mb-1">Pro-Earth</h3>
                  <p className="text-sm text-muted-foreground">
                    This user has gifted donated to a charity which helps mother
                    nature.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between items-start">
              <CardTitle>User Information</CardTitle>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size={"icon-sm"}>
                    <Edit />
                  </Button>
                </SheetTrigger>
                <EditUser/>
              </Sheet>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <div>
                <p className="mb-2 text-muted-foreground text-sm">
                  Profile Completion
                </p>
                <Progress value={67} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Username:</span>
                  <span>John Doe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <span>johndoe@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Phone:</span>
                  <span>+1 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Location:</span>
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Role:</span>
                  <Badge>Admin</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Joined on 2025.01.01
              </p>
            </CardContent>
          </Card>
          <CardList title="Recent Transactions" />
        </div>

        <div className="xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">User</div>
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
}
