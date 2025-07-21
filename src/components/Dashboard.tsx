import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';
import { User, Settings, FileText, Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Profile {
  id: string;
  display_name: string;
  bio: string;
  avatar_url: string;
  website: string;
  location: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  published: boolean;
  created_at: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    excerpt: '',
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchPosts();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      if (data) setProfile(data);
    } catch (error: any) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      console.error('Error fetching posts:', error);
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', user?.id);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
      
      fetchProfile();
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const createPost = async () => {
    if (!newPost.title || !newPost.content) {
      toast({
        title: "Missing fields",
        description: "Please fill in title and content.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('posts')
        .insert({
          user_id: user?.id,
          title: newPost.title,
          content: newPost.content,
          excerpt: newPost.excerpt || newPost.content.substring(0, 150) + '...',
          published: false,
        });

      if (error) throw error;

      toast({
        title: "Post created",
        description: "Your post has been created successfully.",
      });

      setNewPost({ title: '', content: '', excerpt: '' });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Creation failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const togglePostPublished = async (postId: string, published: boolean) => {
    try {
      const { error } = await supabase
        .from('posts')
        .update({ published: !published })
        .eq('id', postId);

      if (error) throw error;

      toast({
        title: published ? "Post unpublished" : "Post published",
        description: `Your post has been ${published ? 'unpublished' : 'published'}.`,
      });

      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold gradient-text mb-8">Dashboard</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="posts" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Posts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Profile Settings
                </CardTitle>
                <CardDescription>
                  Update your profile information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Display Name</label>
                  <Input
                    value={profile?.display_name || ''}
                    onChange={(e) => setProfile(prev => prev ? { ...prev, display_name: e.target.value } : null)}
                    onBlur={(e) => updateProfile({ display_name: e.target.value })}
                    placeholder="Your display name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Bio</label>
                  <Textarea
                    value={profile?.bio || ''}
                    onChange={(e) => setProfile(prev => prev ? { ...prev, bio: e.target.value } : null)}
                    onBlur={(e) => updateProfile({ bio: e.target.value })}
                    placeholder="Tell us about yourself"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <Input
                    value={profile?.website || ''}
                    onChange={(e) => setProfile(prev => prev ? { ...prev, website: e.target.value } : null)}
                    onBlur={(e) => updateProfile({ website: e.target.value })}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    value={profile?.location || ''}
                    onChange={(e) => setProfile(prev => prev ? { ...prev, location: e.target.value } : null)}
                    onBlur={(e) => updateProfile({ location: e.target.value })}
                    placeholder="Your location"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="posts" className="space-y-6">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Create New Post
                </CardTitle>
                <CardDescription>
                  Share your thoughts and ideas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={newPost.title}
                  onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Post title"
                />
                <Input
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief excerpt (optional)"
                />
                <Textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Write your post content here..."
                  rows={4}
                />
                <Button onClick={createPost} className="btn-primary-glow">
                  Create Post
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Your Posts</h3>
              {posts.length === 0 ? (
                <Card className="card-gradient border-border/50">
                  <CardContent className="flex items-center justify-center h-32">
                    <p className="text-muted-foreground">No posts yet. Create your first post above!</p>
                  </CardContent>
                </Card>
              ) : (
                posts.map((post) => (
                  <Card key={post.id} className="card-gradient border-border/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{post.title}</CardTitle>
                          <CardDescription>{post.excerpt}</CardDescription>
                        </div>
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Created: {new Date(post.created_at).toLocaleDateString()}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => togglePostPublished(post.id, post.published)}
                        >
                          {post.published ? 'Unpublish' : 'Publish'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;