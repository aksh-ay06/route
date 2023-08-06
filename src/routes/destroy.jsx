import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    try {
        // Delete the contact
        await deleteContact(params.contactId);
        
        // Redirect to the root ("/") route
        return redirect("/");
    } catch (error) {
        // Handle the error (if needed)
        console.error(error);
    }
}
