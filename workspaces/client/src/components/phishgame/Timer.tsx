// Timer.tsx
class Timer {
    private duration: number;
    private startTime: number | null;
    running: boolean;
  
    constructor(duration: number) {
      console.log("Timer initialized"); // Debug-Ausgabe hinzugefügt
  
      this.duration = duration;
      this.startTime = null;
      this.running = false;
    }
  
    start() {
      if (!this.running) {
        this.startTime = performance.now();
        this.running = true;
      }
    }
  
    stop() {
      this.startTime = null;
      this.running = false;
    }
  
    resetTimer() {
      this.stop();
      this.start();
    }
  
    getTimeRemaining() {
      if (this.startTime === null || !this.running) {
        return null;
      }
  
      const currentTime = performance.now();
      const elapsedTime = currentTime - this.startTime;
      const remainingTime = Math.max(0, this.duration - elapsedTime);
      return remainingTime; // Rückgabetyp sollte number sein
    }
  }
  
  export default Timer;
  