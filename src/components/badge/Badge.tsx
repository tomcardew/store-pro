import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: "100%",
    top: -6,
    right: -4,
    color: 'white',
    fontSize: 10,
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16
  },
});

interface IBadge {
  count?: number;
  type?: 'normal' | 'alert'
} 

const Badge = ({ count, type = 'normal' }: IBadge) => {
  return (
    <div
      className={css(styles.container)}
      style={{
        backgroundColor: type === 'normal' ? 'black' : 'red',
      }}
    >
      {count}
    </div>
  );
};

export default Badge;
