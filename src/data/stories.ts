export interface Story {
  id: string;
  username: string;
  userAvatar: string;
  imageUrl: string;
  timestamp: string;
}

export interface UserStories {
  userId: string;
  username: string;
  userAvatar: string;
  stories: Story[];
}

export const storiesData: UserStories[] = [
  {
    userId: "1",
    username: "traveler_jane",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    stories: [
      {
        id: "101",
        username: "traveler_jane",
        userAvatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "2 hours ago",
      },
      {
        id: "102",
        username: "traveler_jane",
        userAvatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    userId: "2",
    username: "food_lover",
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    stories: [
      {
        id: "201",
        username: "food_lover",
        userAvatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "3 hours ago",
      },
      {
        id: "202",
        username: "food_lover",
        userAvatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "2 hours ago",
      },
      {
        id: "203",
        username: "food_lover",
        userAvatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    userId: "3",
    username: "nature_explorer",
    userAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    stories: [
      {
        id: "301",
        username: "nature_explorer",
        userAvatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "5 hours ago",
      },
    ],
  },
  {
    userId: "4",
    username: "urban_photographer",
    userAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    stories: [
      {
        id: "401",
        username: "urban_photographer",
        userAvatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "6 hours ago",
      },
      {
        id: "402",
        username: "urban_photographer",
        userAvatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "4 hours ago",
      },
    ],
  },
  {
    userId: "5",
    username: "fitness_guru",
    userAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    stories: [
      {
        id: "501",
        username: "fitness_guru",
        userAvatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "7 hours ago",
      },
      {
        id: "502",
        username: "fitness_guru",
        userAvatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        timestamp: "5 hours ago",
      },
    ],
  },
];
