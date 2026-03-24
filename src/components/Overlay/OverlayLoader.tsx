type OverlayProps = {
  isLoading: boolean;
}

const OverlayLoader: React.FC<OverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
      onClick={() => console.log('Overlay clicked')}
    >
      <div style={{ color: 'white', fontSize: '24px' }}>Loading...</div>
    </div>
  );
};

export default OverlayLoader;
