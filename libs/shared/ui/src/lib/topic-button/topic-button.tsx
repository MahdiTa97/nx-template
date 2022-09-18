import styles from './topic-button.module.css';

/* eslint-disable-next-line */
export interface TopicButtonProps {}

export function TopicButton(props: TopicButtonProps) {
  return (
    <div className={styles['container']}>
      <div className="flex max-w-md pl-4 transition-shadow bg-red-800 rounded-lg shadow min-w-max hover:shadow-md">
        <div className="p-5 bg-red-800">
          <h2 className="text-4xl font-bold">Hello</h2>
        </div>
      </div>
    </div>
  );
}

export default TopicButton;
