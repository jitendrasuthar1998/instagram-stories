import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { storiesData } from "../data/stories";
import StoryViewer from "../components/StoryViewer";

const mockOnClose = jest.fn();

describe("StoryViewer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockOnClose.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("renders story viewer with correct initial story", () => {
    render(
      <StoryViewer
        allStories={storiesData}
        initialUserIndex={0}
        onClose={mockOnClose}
      />
    );

    const storyViewer = screen.getByTestId("story-viewer");
    expect(storyViewer).toBeInTheDocument();

    expect(screen.getByText(storiesData[0].username)).toBeInTheDocument();

    const storyImage = screen.getByAltText("Story");
    expect(storyImage).toHaveAttribute(
      "src",
      storiesData[0].stories[0].imageUrl
    );
  });

  test("navigates to next story or next user when right side is clicked", () => {
    render(
      <StoryViewer
        allStories={storiesData}
        initialUserIndex={0}
        onClose={mockOnClose}
      />
    );

    const currentUserStories = storiesData[0].stories;
    const hasMultipleStories = currentUserStories.length > 1;
    const nextButton = screen.getByTestId("story-next");

    fireEvent.click(nextButton);

    if (hasMultipleStories) {
      // If the user has multiple stories, it should go to the next story
      const storyImage = screen.getByAltText("Story");
      expect(storyImage).toHaveAttribute("src", currentUserStories[1].imageUrl);
    } else {
      // If the user has only one story, it should move to the next user
      expect(screen.getByText(storiesData[1].username)).toBeInTheDocument();
    }
  });

  test("navigates to previous story or previous user when left side is clicked", () => {
    render(
      <StoryViewer
        allStories={storiesData}
        initialUserIndex={0}
        onClose={mockOnClose}
      />
    );

    const nextButton = screen.getByTestId("story-next");
    fireEvent.click(nextButton); // Move to the next story first

    const prevButton = screen.getByTestId("story-prev");
    fireEvent.click(prevButton); // Now go back

    const storyImage = screen.getByAltText("Story");
    expect(storyImage).toHaveAttribute(
      "src",
      storiesData[0].stories[0].imageUrl
    );
  });

  test("automatically advances to next story after 5 seconds", async () => {
    render(
      <StoryViewer
        allStories={storiesData}
        initialUserIndex={0}
        onClose={jest.fn()}
      />
    );

    const currentUserStories = storiesData[0].stories;
    const hasMultipleStories = currentUserStories.length > 1;
    const storyImage = screen.getByAltText("Story");

    expect(storyImage).toHaveAttribute("src", currentUserStories[0].imageUrl);

    fireEvent.load(storyImage);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      if (hasMultipleStories) {
        const updatedStoryImage = screen.getByAltText("Story");
        expect(updatedStoryImage).toHaveAttribute(
          "src",
          currentUserStories[1].imageUrl
        );
      } else if (storiesData.length > 1) {
        expect(screen.getByText(storiesData[1].username)).toBeInTheDocument();
      }
    });
  });

  test("closes viewer when all stories are viewed", async () => {
    render(
      <StoryViewer
        allStories={storiesData}
        initialUserIndex={0}
        onClose={mockOnClose}
      />
    );

    const totalStories = storiesData.reduce(
      (acc, user) => acc + user.stories.length,
      0
    );

    for (let i = 0; i < totalStories; i++) {
      const storyImage = await screen.findByAltText("Story");
      fireEvent.load(storyImage);

      await waitFor(() => {
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      });

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      const nextButton = screen.getByTestId("story-next");
      fireEvent.click(nextButton);
    }

    const closeButton = screen.getByTestId("story-close");
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
