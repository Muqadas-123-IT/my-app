import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MessageSquare } from "lucide-react";

const FeaturedPost = () => {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/img15.png",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/img16.png",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/img17.png",
    },
  ];

  return (
    <div id="Feature" className="w-full px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-sm text-blue-500 font-bold">Practice Advice</p>
        <h2 className="text-3xl font-bold mt-2">Featured Posts</h2>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="border rounded-lg shadow-md">
            {/* Image Section */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <Badge className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1">NEW</Badge>
            </div>

            {/* Content Section */}
            <CardContent className="p-4">
              {/* Labels Below Image */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span className="text-blue-500 font-semibold">Google</span>
                <span className="text-gray-400">•</span>
                <span>Trending</span>
                <span className="text-gray-400">•</span>
                <span>New</span>
              </div>

              {/* Post Details */}
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
                <CardDescription className="text-gray-500">{post.description}</CardDescription>
              </CardHeader>

              {/* Footer Section */}
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
              </div>
              <Button variant="link" className="mt-4 p-0 text-blue-500 font-semibold">
                Learn More →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPost;
