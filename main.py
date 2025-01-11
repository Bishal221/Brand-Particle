import subprocess

def run_git_commands():
    try:
        # Add all changes
        subprocess.run(['git', 'add', '--all'], check=True)
        
        # Commit changes with the message "Auto saved"
        subprocess.run(['git', 'commit', '-m', 'Auto saved'], check=True)
        
        print("Git commands executed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error running Git command: {e}")

if __name__ == "__main__":
    run_git_commands()
