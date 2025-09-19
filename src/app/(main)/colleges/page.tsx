'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { colleges } from '@/lib/data';
import { MapPin, BookOpen, CheckCircle, University, Wifi, Library, FlaskConical } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const facilityIcons: { [key: string]: LucideIcon } = {
  'Hostel': University,
  'Lab': FlaskConical,
  'Library': Library,
  'Internet': Wifi,
};

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Government College Directory
        </h1>
        <p className="text-muted-foreground">
          Find the right college for you.
        </p>
      </div>

      <div className="sticky top-14 z-10 bg-muted/40 py-4 -mt-4 -mx-6 px-6 backdrop-blur-sm">
        <Input
          type="text"
          placeholder="Search by college name, city, or state..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg"
        />
      </div>

      {filteredColleges.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.map((college) => {
            const FacilityIcon = facilityIcons[college.facilities[0]] || University;
            return (
              <Card key={college.id} className="flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-200">
                <CardHeader>
                  <CardTitle>{college.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-1">
                    <MapPin className="h-4 w-4" />
                    {college.city}, {college.state}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><BookOpen className="h-4 w-4"/>Courses Offered</h4>
                    <div className="flex flex-wrap gap-1">
                      {college.courses.slice(0, 3).map((course) => (
                        <Badge key={course} variant="outline">{course}</Badge>
                      ))}
                      {college.courses.length > 3 && <Badge variant="outline">+{college.courses.length - 3} more</Badge>}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4"/>Eligibility</h4>
                    <p className="text-sm text-muted-foreground">{college.eligibility}</p>
                  </div>
                </CardContent>
                <CardFooter>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-semibold">Facilities:</span>
                        {college.facilities.map(facility => {
                            const Icon = facilityIcons[facility];
                            return Icon ? <Icon key={facility} className="h-5 w-5" title={facility} /> : null;
                        })}
                    </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No colleges found matching your search.</p>
        </div>
      )}
    </div>
  );
}
