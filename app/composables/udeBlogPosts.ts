import { computed } from "vue";

export function useBlogPosts() {
  const { data: posts } = useAsyncData("posts", () =>
    queryCollection("blog").all()
  );

  const featuredPost = computed(() =>
    posts.value ? posts.value.find((post) => post.featured === true) : null
  );

  const otherPosts = computed(() =>
    posts.value
      ? posts.value.filter(
          (post) => !featuredPost.value || post.path !== featuredPost.value.path
        )
      : []
  );

  return {
    posts,
    featuredPost,
    otherPosts,
  };
}
