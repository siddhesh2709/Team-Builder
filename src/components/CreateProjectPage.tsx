import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CreateProjectPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Software",
    roles: [{ title: "", compensation: "" }]
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle role changes
  const handleRoleChange = (index: number, field: string, value: string) => {
    setFormData(prev => {
      const updatedRoles = [...prev.roles];
      updatedRoles[index] = { ...updatedRoles[index], [field]: value };
      return { ...prev, roles: updatedRoles };
    });
  };

  // Add a new role field
  const addRole = () => {
    setFormData(prev => ({
      ...prev,
      roles: [...prev.roles, { title: "", compensation: "" }]
    }));
  };

  // Remove a role field
  const removeRole = (index: number) => {
    if (formData.roles.length > 1) {
      setFormData(prev => {
        const updatedRoles = [...prev.roles];
        updatedRoles.splice(index, 1);
        return { ...prev, roles: updatedRoles };
      });
    }
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.title || !formData.description) {
      toast.error("Please fill in all required fields", {
        description: "Title and description are required"
      });
      setIsSubmitting(false);
      return;
    }

    // Validate roles
    const invalidRoles = formData.roles.some(role => !role.title);
    if (invalidRoles) {
      toast.error("Please fill in all role titles", {
        description: "Each role must have a title"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast.success("Project created successfully!", {
        description: "Your project has been created and is now visible to others"
      });
      setIsSubmitting(false);
      navigate("/projects");
    }, 1500);
  };

  const categories = [
    "Software",
    "Artificial Intelligence",
    "E-commerce",
    "Social",
    "Productivity",
    "Nonprofits",
    "Healthcare",
    "Education",
    "Finance",
    "Gaming",
    "Other"
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400">
              Create Your Project
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-center">
            Share your vision and find the perfect team members to bring it to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gray-900/70 border-gray-800">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription className="text-gray-400">
                Fill in the information below to create your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Project Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter a catchy title for your project"
                    value={formData.title}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 text-white"
                    required
                  />
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">
                    Project Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your project, its goals, and what you're looking to build"
                    value={formData.description}
                    onChange={handleChange}
                    className="h-32 bg-gray-800/50 border-gray-700 text-white"
                    required
                  />
                </div>

                {/* Project Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">
                    Category <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-gray-800/50 border border-gray-700 text-white"
                    required
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Team Roles */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-white text-lg">
                      Team Roles <span className="text-red-500">*</span>
                    </Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addRole}
                      className="border-gray-700 hover:bg-gray-800 text-white"
                    >
                      <FaPlus className="mr-2" /> Add Role
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {formData.roles.map((role, index) => (
                      <div key={index} className="flex gap-4 items-start p-4 rounded-md bg-gray-800/30 border border-gray-700">
                        {/* Role Title */}
                        <div className="flex-1 space-y-2">
                          <Label htmlFor={`roleTitle-${index}`} className="text-white">
                            Role Title <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id={`roleTitle-${index}`}
                            placeholder="e.g. Frontend Developer"
                            value={role.title}
                            onChange={(e) => handleRoleChange(index, "title", e.target.value)}
                            className="bg-gray-800/50 border-gray-700 text-white"
                            required
                          />
                        </div>

                        {/* Compensation */}
                        <div className="flex-1 space-y-2">
                          <Label htmlFor={`roleCompensation-${index}`} className="text-white">
                            Compensation (Optional)
                          </Label>
                          <Input
                            id={`roleCompensation-${index}`}
                            placeholder="e.g. PAID, UNPAID, EQUITY"
                            value={role.compensation}
                            onChange={(e) => handleRoleChange(index, "compensation", e.target.value)}
                            className="bg-gray-800/50 border-gray-700 text-white"
                          />
                        </div>

                        {/* Remove Role Button */}
                        {formData.roles.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeRole(index)}
                            className="mt-8 text-gray-400 hover:text-white hover:bg-red-900/20"
                          >
                            <FaTimes />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-red-500 to-amber-400 hover:from-red-600 hover:to-amber-500 text-white"
                  >
                    {isSubmitting ? "Creating Project..." : "Create Project"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
