from time import sleep
import os

process_id = os.getpid()

print(process_id)
sleep(20)

os.system(f"ps aux | grep {process_id}")
