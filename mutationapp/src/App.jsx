import { useQuery, useMutation, QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { PlusCircle, Loader2, FileText, Send, Hash, Layers } from "lucide-react";

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!response.ok) throw new Error('네트워크 응답에 문제가 발생했습니다...⏱️');
  return response.json();
};

const createPost = async ({ title, body }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title, body, userId: 1 }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  });
  return response.json();
};

const queryClient = new QueryClient();

/**
 * Main Component
 */
function PostApp() {
  const client = useQueryClient();

  const { isLoading, error, data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  const createMutate = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // 실제 API라면 캐시 갱신이 일어나겠지만, JSONPlaceholder는 가짜라 
      // 리스트가 바뀌지 않으므로 콘솔에만 찍거나 낙관적 업데이트를 고려할 수 있습니다.
      client.invalidateQueries(['posts']);
      alert(`🎉 포스트가 성공적으로 생성되었습니다! (ID: ${newPost.id})`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const content = formData.get('content');

    if (!title || !content) return;

    createMutate.mutate({ title, body: content });
    e.currentTarget.reset();
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>
            <Layers style={{ color: '#6366f1' }} size={32} />
            Post Dashboard
          </h1>
          <p style={styles.subtitle}>React Query & Modern UI Interaction</p>
        </header>

        {/* Post Form Section */}
        <section style={styles.card}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>제목</label>
              <input 
                name="title"
                type="text" 
                placeholder='무엇에 대해 쓰실 건가요?'
                required  
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>내용</label>
              <textarea 
                name="content"
                rows='3'
                placeholder='내용을 상세히 입력해 주세요.'
                required
                style={styles.textarea}
              ></textarea>
            </div>
            <button 
              type='submit'
              disabled={createMutate.isPending}
              style={{
                ...styles.button,
                backgroundColor: createMutate.isPending ? '#94a3b8' : '#6366f1'
              }}
            >
              {createMutate.isPending ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
              {createMutate.isPending ? '전송 중...' : '포스트 발행하기'}
            </button>
          </form>
        </section>

        {/* Post List Section */}
        <section style={styles.listSection}>
          <h2 style={styles.listTitle}>
            <PlusCircle size={22} color="#6366f1" />
            Recent Feed
          </h2>

          {isLoading ? (
            <div style={styles.loadingState}>
              <Loader2 className="animate-spin" size={40} color="#6366f1" />
              <p>피드를 불러오는 중입니다...</p>
            </div>
          ) : error ? (
            <div style={styles.errorState}>⚠️ 오류가 발생했습니다: {error.message}</div>
          ) : (
            <div style={styles.grid}>
              {posts.map(post => (
                <div key={post.id} style={styles.postCard}>
                  <div style={styles.postHeader}>
                    <span style={styles.postId}><Hash size={14} />{post.id}</span>
                    <FileText size={18} color="#94a3b8" />
                  </div>
                  <h3 style={styles.postTitle}>{post.title}</h3>
                  <p style={styles.postBody}>{post.body}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

/**
 * Styling (Trendy & Clean)
 */
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    color: '#1e293b',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '40px 20px',
  },
  wrapper: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '8px',
    color: '#0f172a',
  },
  subtitle: {
    color: '#64748b',
    fontSize: '1.1rem',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    marginBottom: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontWeight: '600',
    fontSize: '0.9rem',
    color: '#475569',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    outline: 'none',
    resize: 'none',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '14px',
    borderRadius: '12px',
    color: 'white',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s, opacity 0.2s',
  },
  listSection: {
    marginTop: '20px',
  },
  listTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.5rem',
    marginBottom: '24px',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  postCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid #f1f5f9',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  postId: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#6366f1',
    backgroundColor: '#eef2ff',
    padding: '4px 8px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  postTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    marginBottom: '10px',
    lineHeight: '1.4',
    color: '#1e293b',
  },
  postBody: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.6',
  },
  loadingState: {
    textAlign: 'center',
    padding: '50px 0',
    color: '#64748b',
  },
  errorState: {
    padding: '20px',
    backgroundColor: '#fef2f2',
    color: '#dc2626',
    borderRadius: '12px',
    textAlign: 'center',
  }
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostApp />
    </QueryClientProvider>
  )
}

export default App;