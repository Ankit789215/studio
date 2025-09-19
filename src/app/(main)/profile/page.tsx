import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function ProfilePage() {
  // Mock user data
  const userProfile = {
    name: 'Aarav Sharma',
    age: 17,
    gender: 'Male',
    class: 12,
    academicInterests: ['Science', 'Technology', 'Mathematics'],
    email: 'aarav.sharma@example.com',
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          My Profile
        </h1>
        <p className="text-muted-foreground">
          View and manage your personal information.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            This information helps us personalize your recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={userProfile.name} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" value={userProfile.email} readOnly />
            </div>
          </div>
          
          <Separator />
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" value={userProfile.age} type="number" readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Input id="gender" value={userProfile.gender} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Input id="class" value={`Class ${userProfile.class}`} readOnly />
            </div>
          </div>
          
          <Separator />

          <div className="space-y-2">
            <Label htmlFor="interests">Academic Interests</Label>
            <Input id="interests" value={userProfile.academicInterests.join(', ')} readOnly />
            <p className="text-sm text-muted-foreground">
              These are used to find personalized learning resources for you.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
