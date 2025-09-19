
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { colleges } from '@/lib/data';
import type { College } from '@/lib/data';
import { MapPin, BookOpen, CheckCircle, University, Wifi, Library, FlaskConical, Navigation, Loader2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';


const facilityIcons: { [key: string]: LucideIcon } = {
  'Hostel': University,
  'Lab': FlaskConical,
  'Library': Library,
  'Internet': Wifi,
};

type CollegeWithDistance = College & { distance?: number };

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [sortedColleges, setSortedColleges] = useState<CollegeWithDistance[] | null>(null);
  const { toast } = useToast();

  const handleSearch = (collegesToFilter: CollegeWithDistance[]) => {
    return collegesToFilter.filter(
      (college) =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const displayedColleges = handleSearch(sortedColleges || colleges);
  
  const getDistanceFromLatLonInKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  }

  const handleFindNearest = () => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation is not supported by your browser",
        variant: "destructive",
      });
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const collegesWithDistances = colleges.map(college => ({
          ...college,
          distance: getDistanceFromLatLonInKm(latitude, longitude, college.lat, college.lon),
        }));
        
        collegesWithDistances.sort((a, b) => a.distance - b.distance);
        setSortedColleges(collegesWithDistances);
        setIsLocating(false);
        toast({
          title: "Colleges sorted by your location!",
          description: "Showing the nearest colleges first.",
        });
      },
      (error) => {
        console.error("Error getting location:", error);
        toast({
          title: "Could not access your location",
          description: "Please ensure location services are enabled and try again.",
          variant: "destructive",
        });
        setIsLocating(false);
      }
    );
  };

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

      <div className="sticky top-14 z-10 bg-muted/40 py-4 -mt-4 -mx-6 px-6 backdrop-blur-sm flex items-center gap-4">
        <Input
          type="text"
          placeholder="Search by college name, city, or state..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg"
        />
        <Button onClick={handleFindNearest} disabled={isLocating}>
          {isLocating ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Navigation className="mr-2 h-4 w-4" />
          )}
          Find Nearest
        </Button>
      </div>

      {displayedColleges.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedColleges.map((college) => {
            const FacilityIcon = facilityIcons[college.facilities[0]] || University;
            return (
              <Card key={college.id} className="flex flex-col transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_4px_30px_5px_hsl(var(--primary)/0.3)]">
                <CardHeader>
                  <CardTitle>{college.name}</CardTitle>
                  <CardDescription className="flex items-center justify-between gap-2 pt-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {college.city}, {college.state}
                    </div>
                    {college.distance && (
                      <Badge variant="secondary" className="font-mono">{college.distance.toFixed(0)} km away</Badge>
                    )}
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
