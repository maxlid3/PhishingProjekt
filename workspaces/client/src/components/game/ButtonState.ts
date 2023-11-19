// ButtonState.ts
export class ButtonState {
  private static instance: ButtonState;
  private isActive: boolean = false;

  private constructor() {
    ButtonState.instance = this;
  }

  public static getInstance(): ButtonState {
    if (!ButtonState.instance) {
      ButtonState.instance = new ButtonState();
    }
    return ButtonState.instance;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public toggleState(): void {
    if (!this.isActive) {
      this.isActive = true;
      console.log(ButtonState.instance)
    }
    // Optional: You can add an else branch to handle a different behavior if needed.
  }
}